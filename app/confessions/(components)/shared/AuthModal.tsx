import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "@/lib/AuthProvider";
import { Button } from "@/components/ui/Button";
import { generateRandomIdentity } from "@/lib/identity";
import { RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import { AuthError } from "@supabase/supabase-js";

interface SignupModalProps {
  isOpen: boolean;
  isLogin?: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose, isLogin }: SignupModalProps) => {
  const { signIn, signUp } = useAuth();

  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 h-screen flex items-center  justify-center p-4  backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card-foreground border text-card  w-full lg:p-10 p-5 lg:max-w-md max-w-sm rounded-md  overflow-hidden relative"
          >
            <h2 className="text-xl font-semibold mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>

            <div className="">
              {isLogin ? (
                <LoginForm  onLogin={signIn} onClose={onClose}  />
              ) : (
                <SignUpForm  onSignUp={signUp} onClose={onClose} />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface SignUpProps {
  onSignUp: (
    email: string,
    password: string,
    username: string,
    avatar: string
  ) => Promise<void>;

  onClose: () => void;
}

const SignUpForm = ({ onSignUp, onClose }: SignUpProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string | null>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    handleRandom();
  }, []);

  const handleRandom = () => {
    const { username, avatar } = generateRandomIdentity();
    setUsername(username);
    setAvatar(avatar);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSignUp(email, password, username, avatar!);
      toast("Signup successful! Login with your credentials.");
      setEmail("");
      setPassword("");
      setUsername("");
      setAvatar("");
      onClose();
    } catch (err : AuthError | unknown) {
      if (err instanceof AuthError) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Username
        </label>
        <div className="inline-flex gap-2 w-full">
          <input
            type="text"
            value={username}
            readOnly
            required
            className="inputs"
          />
          {avatar && (
            <picture>
              <img
                src={avatar}
                alt="profile-avatar"
                className="object-contain size-12 rounded-full border border-white/25 overflow-hidden p-1 "
              />
            </picture>
          )}
          <button
            type="button"
            onClick={handleRandom}
            className="text-white/50 ms-2 "
          >
            <RefreshCcw size={20} />
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="inputs"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inputs"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  );
};

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onClose: () => void;
}

const LoginForm = ({ onLogin ,onClose}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onLogin(email, password);
      onClose();
      setEmail("");
      setPassword("");
      toast.success("Welcome back!");
    } catch (err: AuthError | unknown) {
      if (err instanceof AuthError) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.log("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="example@mail.com"
          className="mt-2 inputs"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 inputs "
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Logging In..." : "Login"}
      </Button>
    </form>
  );
};
