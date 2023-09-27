if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const register = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
    await navigator.serviceWorker.ready;
    if (!register?.pushManager) return;
    const isSubscription = await register.pushManager.getSubscription();

    if (isSubscription) return;

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BCLIHqtOvJRwlP4yk8wneLdJtiAROUITNJRCNxiLTmCbnqKGTTlegs53kDb0_79LbcmKJ-nD3ya-PkZg8bQEuD0",
    });
    alert(JSON.stringify(subscription, undefined, 2));
    const payload = {
      subscribe: JSON.stringify(subscription),
    };
    const response = await fetch("http://localhost:3001/subscribe", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("🚀 Subscribe notification:", response);
  });
}
