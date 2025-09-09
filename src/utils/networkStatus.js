let listeners = [];

export const isOnline = () => navigator.onLine;

export const addConnectivityListener = (onOnline, onOffline) => {
  const handleOnline = () => {
    onOnline?.();
    notifyListeners(true);
  };

  const handleOffline = () => {
    onOffline?.();
    notifyListeners(false);
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Save for cleanup
  listeners.push(() => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  });
};

export const removeConnectivityListeners = () => {
  listeners.forEach((remove) => remove());
  listeners = [];
};

const notifyListeners = (status) => {
  // You can broadcast to a global state/store if needed
  console.log(`Network status changed: ${status ? 'Online' : 'Offline'}`);
};

export const showNoInternetPopup = () => {
  alert('🚫 No internet connection.\nPlease check your network and try again.');
};
