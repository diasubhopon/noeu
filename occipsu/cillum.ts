// Define a type for possible device categories
type DeviceCategory = 'Mobile' | 'Desktop' | 'Tablet';

// Function to get the device category
function getDeviceCategory(): DeviceCategory {
  // Assuming 'Mobile' is the default device category
  const deviceCategory: DeviceCategory = 'Mobile';
  return deviceCategory;
}

// Store the device category
const device: DeviceCategory = getDeviceCategory();
