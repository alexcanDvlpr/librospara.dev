
const browserSupportsTransitionViewApi = () =>
    Boolean(document.startViewTransition);

const fetchPage = async (url) => {
    const response = await fetch(url);
    const text = await response.text();

    const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    return data;
}

const startViewTransition = () => {
    if (!browserSupportsTransitionViewApi()) return;

    window.navigation.addEventListener("navigate", (evt) => {
        const toUrl = new URL(evt.destination.url);

        if (location.origin !== toUrl.origin) return;

        evt.intercept({
            async handler() {
                const data = await fetchPage(toUrl.pathname);

                document.startViewTransition(() => {
                    document.documentElement.scrollTop = 0;
                    document.body.innerHTML = data;
                });
            }
        });
    });
}

startViewTransition();