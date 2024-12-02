import { useRouter } from 'next/navigation';
import { AppConfig } from '@/appConfig';

const useLogin = () => {
  const router = useRouter();

  return {
    login: () => router.replace(AppConfig.routes.auth.login),
  };
};

export default useLogin;
