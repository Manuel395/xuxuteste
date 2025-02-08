function openLink(platform) {
    const links = {
        spotify: {
            android: "spotify://user/username",
            ios: "spotify://user/username",
            web: "https://open.spotify.com/user/username"
        },
        applemusic: {
            android: "music://",
            ios: "music://",
            web: "https://music.apple.com/profile/username"
        },
        youtube: {
            android: "vnd.youtube://www.youtube.com/channel/UC123456",
            ios: "youtube://www.youtube.com/channel/UC123456",
            web: "https://www.youtube.com/channel/UC123456"
        },
        instagram: {
            android: "instagram://user?username=username",
            ios: "instagram://user?username=username",
            web: "https://www.instagram.com/username/"
        },
        facebook: {
            android: "fb://profile/username",
            ios: "fb://profile/username",
            web: "https://www.facebook.com/username"
        },
        twitter: {
            android: "twitter://user?screen_name=username",
            ios: "twitter://user?screen_name=username",
            web: "https://twitter.com/username"
        }
    };

    const userAgent = navigator.userAgent.toLowerCase();
    let appUrl = links[platform].web; // Link web padrão

    if (/android/.test(userAgent)) {
        appUrl = links[platform].android;
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
        appUrl = links[platform].ios;
    }

    let startTime = Date.now();
    let opened = false;

    // Evento para detectar se o usuário saiu da página (ou seja, o app foi aberto)
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            opened = true;
        }
    });

    // Tenta abrir o aplicativo imediatamente
    window.open(appUrl, '_blank'); // Abre em uma nova aba

    // Se o app não abrir, redireciona para o navegador em uma nova aba
    setTimeout(() => {
        let elapsedTime = Date.now() - startTime;
        if (!opened && elapsedTime < 800) {
            window.open(links[platform].web, '_blank');
        }
    }, 200);
}
