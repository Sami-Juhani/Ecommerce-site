import { useState } from "react";
import { signal } from "@preact/signals-react";
import { API_URL } from "../index";

const ordersError = signal("");

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/api/orders/${userId}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      ordersError.value = error.message;
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch(`${API_URL}/api/orders/${orderId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (response.status === 404) {
        ordersError.value = data.message;
      }

      return data;
    } catch (error) {
      ordersError.value = error.message;
    }
  };

  const saveOrder = async (userId, products) => {
    try {
      const response = await fetch(API_URL + "/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, products }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      ordersError.value = error.message;
    }
  };

  const updateOrderById = async (orderId, delivered) => {
    try {
      const response = await fetch(API_URL + `/api/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(delivered),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      ordersError.value = error.message;
    }
  };
  return {
    orders,
    getAllOrders,
    setOrders,
    deleteOrder,
    saveOrder,
    updateOrderById,
  };
};

export default useOrders;
