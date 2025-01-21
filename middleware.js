import { locales } from 'nextra/locales';

export const middleware = (req) => {
	const { nextUrl } = req
	if (!req.nextUrl.pathname.startsWith("/")) {
		return;
	}
	return locales(req)
}