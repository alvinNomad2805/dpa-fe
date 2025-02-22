// lib/api.ts

export interface MenuItem {
    id: string;
    title: string;
    content: string;
  }
  
  export async function fetchSidebarMenu(): Promise<MenuItem[]> {
    // Simulate an API call
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          { id: '1', title: 'Dashboard', content: 'Welcome to the Dashboard' },
          { id: '2', title: 'Settings', content: 'Manage your settings' },
          { id: '3', title: 'Profile', content: 'View and update your profile' },
        ]);
      }, 1000)
    );
  }
  