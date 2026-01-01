import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useLanguage } from "../../contexts/LanguageContext";
import LoginForm from "../Home/LoginForm";
import Loader from "../Loader/Loader.jsx";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [macAddress, setMacAddress] = useState("");
  const [deviceKey, setDeviceKey] = useState("");
  const [isLoader, setIsLoader] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const queryMacAddress = query.get("macAddress");
  const queryDeviceKey = query.get("deviceKey");

  const { langValue } = useLanguage();

  const handleLogin = async (e, type, mac, key) => {
    setIsLoading(true);
    if (type != "fromQuery") {
      e.preventDefault();
    }

    try {
      const response = await fetch(
        "https://servo-back.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            macAddress: mac == "default" ? macAddress : mac,
            deviceKey: key == "default" ? deviceKey : key,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        const newMac = mac == "default" ? macAddress : mac;
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("macAddress", newMac);
        
        setIsLoggedIn(true);
        toast.success(data.message, {
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/manageplaylist");
        }, 1000);
      } else {
        toast.error(data.message, {
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(langValue["loginFailedMessage"] || "Login failed. Please try again.", {
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    return token ? true : false;
  };

  useEffect(() => {
    const loggedIn = checkAuth();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      navigate("/manageplaylist");
    } else {
      setTimeout(() => setIsLoader(false), 1000);
    }
  }, [navigate]);

  useEffect(() => {
    if (queryMacAddress && queryDeviceKey) {
      setMacAddress(queryMacAddress);
      setDeviceKey(queryDeviceKey);
      handleLogin("e", "fromQuery", queryMacAddress, queryDeviceKey);
    }
  }, []);

  if (isLoader) {
    return <Loader />;
  }

  if (isLoggedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <LoginForm
      macAddress={macAddress}
      setMacAddress={setMacAddress}
      deviceKey={deviceKey}
      setDeviceKey={setDeviceKey}
      handleLogin={handleLogin}
      isLoading={isLoading}
      langValue={langValue}
    />
  );
}

