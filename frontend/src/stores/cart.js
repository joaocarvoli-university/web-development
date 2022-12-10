import { api } from "../baseConfig";
import { defineStore } from "pinia";
import Cookies from 'js-cookie'

export const Cart = {
  data: {
    glassesId: Number,
    userId: Number,
  },
};

export const useCartStore = defineStore("Cart", () => {
  async function getByUserId() {
    try {
      const { data, status } = await api.get(
        `/carts?filters[userId][id][$eq]=${Cookies.get('idUser')}&populate=*`
      );
      const response = data.data;
      if (status == 200) {
        return response
      }
    } catch (error) {
      return error;
    }
  }

  async function post(idGlasses) {
    try {
      const { data, status } = await api.post(
        `/carts`,
        {
          data: {
            glassesId: idGlasses,
            userId: Cookies.get('idUser'),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      const response = data.data;
      if (status == 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function put(idCart, newItems) {
    try {
      const { data, status } = await api.put(
        `/carts/${idCart}`,
        {
          data: {
            glassesId: newItems
          }
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      const response = data.data;
      if (status == 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
      return error;
    }

  }

  async function removeCart(idCart) {
    try {
      const { data, status } = await api.delete(
        `/carts/${idCart}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      const response = data.data;
      if (status == 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
      return error;
    }

  }

  return { getByUserId, post, removeCart, put };
});
