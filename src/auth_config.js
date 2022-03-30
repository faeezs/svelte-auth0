const config = {
	domain: import.meta.env.VITE_PUBLIC_AUTH0_DOMAIN,
	clientId: import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_ID,
	userList: import.meta.env.VITE_FESTIVALS.split(",")
};
// console.log(config.userList.includes("coachella"))
export default config;