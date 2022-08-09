const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    // Need to store the triggered prompt events
    window.deferredPrompt = event;

    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }
    // Show the prompt
     promptEvent.prompt();
// deferred prompt variable can only be used once so we need to reset it
     window.deferredPrompt = null;
     butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {

    // Need to clear the prompt
    window.deferredPrompt = null;
});
