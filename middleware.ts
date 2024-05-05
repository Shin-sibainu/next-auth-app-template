export {auth as middleware} from "@/auth";

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
};