import React, { useState } from 'react';
import { IoArrowBack, IoSettings, IoVolumeHigh, IoVolumeMute, IoNotifications, IoNotificationsOff, IoMoon, IoSunny, IoLogOut } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const navigate = useNavigate();

  const handleComingSoon = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  function onBack(){

    navigate('/dashboard')
  }
  const audioVisualSettings = [
    {
      id: 'sound',
      label: 'Sound Effects',
      description: 'Enable sound effects and audio feedback',
      type: 'toggle',
      value: soundEnabled,
      onChange: setSoundEnabled,
      icon: soundEnabled ? IoVolumeHigh : IoVolumeMute,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      description: 'Receive quiz reminders and updates',
      type: 'toggle',
      value: notificationsEnabled,
      onChange: setNotificationsEnabled,
      icon: notificationsEnabled ? IoNotifications : IoNotificationsOff,
    },
    {
      id: 'theme',
      label: 'Dark Mode',
      description: 'Use dark theme for better night viewing',
      type: 'toggle',
      value: darkMode,
      onChange: setDarkMode,
      icon: darkMode ? IoMoon : IoSunny,
    },
  ];

  function handleLogout(){
    setShowLogoutMessage(true);
    
  }
  const renderSetting = (setting) => {
    const Icon = setting.icon;

    return (
      <div className="flex items-center justify-between p-6 bg-black/40 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Icon className="w-6 h-6 text-yellow-400" />
            <div className="absolute inset-0 w-6 h-6 bg-yellow-400/20 rounded-full blur-lg"></div>
          </div>
          <div>
            <div className="text-white font-bold text-lg tracking-wide">{setting.label}</div>
            <div className="text-gray-400 text-sm font-light">{setting.description}</div>
          </div>
        </div>
        <button
          onClick={() => {
            handleComingSoon();
            setting.onChange(!setting.value);
          }}
          className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
            setting.value
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
              : 'bg-gray-600'
          }`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
              setting.value ? 'translate-x-9' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <button
            onClick={() => {
              
              onBack();
            }}
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300 mr-8 group hover:cursor-pointer"
          >
            <IoArrowBack className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform duration-300" />
            <span className="font-medium tracking-wide">BACK TO DASHBOARD</span>
          </button>
          <div className="flex items-center">
            <div className="relative mr-4">
              <IoSettings className="w-10 h-10 text-yellow-400" />
              <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full blur-lg"></div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mr-6"></div>
            <h1 className="text-5xl font-bold text-white tracking-wide">SETTINGS</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent ml-6"></div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Audio & Visual Section */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="relative mr-4">
                <IoVolumeHigh className="w-8 h-8 text-yellow-400" />
                <div className="absolute inset-0 w-8 h-8 bg-yellow-400/20 rounded-full blur-lg"></div>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 tracking-wide">AUDIO & VISUAL</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="space-y-6">
              {audioVisualSettings.map((setting) => (
                <div key={setting.id}>
                  {renderSetting(setting)}
                </div>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="text-center">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 
                       hover:from-red-400 hover:via-red-500 hover:to-red-600
                       text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 
                       hover:scale-105 shadow-xl tracking-wide text-lg flex items-center justify-center mx-auto space-x-3 hover:cursor-pointer"
            >
              <IoLogOut className="w-5 h-5" />
              <span>LOGOUT</span>
            </button>
          </div>
        </div>

        {/* Coming Soon Message */}
        {showComingSoon && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/90 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/50 shadow-2xl">
            <div className="text-center">
              <div className="text-yellow-400 text-3xl font-bold tracking-wide mb-2">COMING SOON!</div>
              <div className="text-gray-300 text-lg">This feature is under development</div>
            </div>
          </div>
        )}

                {showLogoutMessage && (
          <div className='flex justify-center items-center fixed inset-0 bg-black/80'>
            <div className='p-10 bg-gradient-to-br from-black via-gray-900 to-black border border-red-500/20 rounded-3xl md:p-12 shadow-xl text-white max-w-md w-full text-center '>
              <div className=' font-semibold mb-4'>
                Are you sure you want to log out?
              </div>
              <div className='flex justify-between space-x-4'>
                <button
                  className='bg-gradient-to-br from-red-400 to-red-600 px-4 py-2 rounded-2xl text-white hover:cursor-pointer '
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/signin"); 
                  }}
                >
                  Log out
                </button>
                <button
                  className='bg-gray-200 text-black px-4 py-2 rounded-2xl hover:cursor-pointer'
                  onClick={() => setShowLogoutMessage(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        
         
        
      </div>
    </div>
  );
};

export default Settings;