import { ReactNode, createContext, useContext, useState } from "react";
import type { AuthUser } from "~/services/session.server";
import { assertValue } from "~/utils/assert";

export const UserContext = createContext<AuthUser | undefined>(undefined);

export function useUser(): AuthUser {
  return assertValue(useContext(UserContext), "user not set in context");
}

export function useIsLoggedIn(): boolean {
  return !!useContext(UserContext);
}

interface FollowingPostsContextType {
  contextFollowingPosts: { [tabName: string]: any[] };
  setContextFollowingPosts: (posts: any[], tabName: string) => void;
}

const FollowingPostsContext = createContext<FollowingPostsContextType | undefined>(undefined);

export const useFollowingPostsContext = () => {
  const context = useContext(FollowingPostsContext);
  if (!context) {
    throw new Error('useFollowingPostsContext must be used within a FollowingPostsProvider');
  }
  return context;
};

interface FollowingPostsProviderProps {
  children: ReactNode;
  initialTabName: string; 
}

export const FollowingPostsProvider = ({
  children,
  initialTabName,
}: FollowingPostsProviderProps) => {
  const [contextFollowingPosts, setContextFollowingPosts] = useState<{
    [tabName: string]: any[];
  }>({
    [initialTabName]: [], 
  });  

  const value = {
    contextFollowingPosts,
    setContextFollowingPosts: (posts: any[], newTabName: string) => {
      setContextFollowingPosts((prevState) => ({
        ...prevState,
        [newTabName]: posts,
      }));    
    }
  };

  return (
    <FollowingPostsContext.Provider value={value}>
      {children}
    </FollowingPostsContext.Provider>
  );
};