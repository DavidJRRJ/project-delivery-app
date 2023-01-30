const URL = 'http://localhost:3001';
const CONTENT_TYPE = 'application/json';

const headerParam = { 'Content-Type': 'application/json' };

export const getDeliveryData = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      ...headerParam,
      Authorization: token,
    },
  };
  try {
    const response = await fetch(`${URL}/products`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getLoginApp = async (emailParams, passParams) => {
  const options = {
    method: 'POST',
    headers: headerParam,
    body: JSON.stringify({ email: emailParams, password: passParams }),
  };
  try {
    const response = await fetch(`${URL}/login`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getRegister = async (nameParams, emailParams, passParams) => {
  const options = {
    method: 'POST',
    headers: headerParam,
    body: JSON.stringify({
      name: nameParams,
      email: emailParams,
      password: passParams,
    }),
  };
  try {
    const response = await fetch(`${URL}/register`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('erro na tentativa de registro', error);
  }
};

export const getRegisterByAdm = async ({ name,
  email, password, role, token }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT_TYPE,
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
    }),
  };
  try {
    const response = await fetch(`${URL}/admin/manager`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersData = async (token) => {
  try {
    const response = await fetch(
      `${URL}/admin`,
      { method: 'GET',
        headers: {
          'Content-Type': CONTENT_TYPE,
          Authorization: `${token}`,
        } },
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = async (id, token) => {
  try {
    await fetch(
      `${URL}/admin/manager/${id}`,
      { method: 'DELETE',
        headers: {
          'Content-Type': CONTENT_TYPE,
          Authorization: `${token}`,
        } },
    );
    console.log(`O usuário ${id} foi deletado`);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderData = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      ...headerParam,
      Authorization: token,
    },
  };
  try {
    const response = await fetch(`${URL}/customer/`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSellers = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      ...headerParam,
      Authorization: token,
    },
  };
  try {
    const response = await fetch(`${URL}/seller`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
