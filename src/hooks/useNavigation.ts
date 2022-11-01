import { useRouter } from "vue-router";
import { menus, paths } from "@/constants";

export default function useNavigation() {
  const router = useRouter();
  const setMenu = (key: string, keyPath: Array<string>) => {
    router.push(`/${keyPath.join("/")}`);
  };

  const openMenu = (key: string) => {
    if (paths[key]) {
      router.push(paths[key]);
    }
  };

  return { menus, setMenu, openMenu };
}
