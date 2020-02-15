import Axios from 'axios';

export default async function getUnits(page, rowCount, search = '') {
  console.log({ search });
  return Axios.get(
    `http://192.168.1.62:5000/api/units/overview?Page=${page}&NumberOfRows=${rowCount}&Search=${search}`,
    {
      method: 'GET', // or 'PUT'
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function getUnit(id) {
  // return fetch(`http://192.168.1.62:5000/api/units/unit?UnitId=${id}&NumberOfConfigurations=5`);
}
export function getMockUnits() {
  return [
    {
      id: 1,
      name: 'Home 0',
      widgetConfigs: 0,
      themeConfigs: 784,
      brokerConfigs: 784,
    },
    {
      id: 2,
      name: 'Home 1',
      widgetConfigs: 0,
      themeConfigs: 324,
      brokerConfigs: 324,
    },
    {
      id: 3,
      name: 'Home 2',
      widgetConfigs: 0,
      themeConfigs: 196,
      brokerConfigs: 0,
    },
    {
      id: 4,
      name: 'Home 3',
      widgetConfigs: 0,
      themeConfigs: 4,
      brokerConfigs: 0,
    },
    {
      id: 5,
      name: 'Home 4',
      widgetConfigs: 0,
      themeConfigs: 256,
      brokerConfigs: 256,
    },
    {
      id: 6,
      name: 'Home 5',
      widgetConfigs: 0,
      themeConfigs: 289,
      brokerConfigs: 0,
    },
    {
      id: 7,
      name: 'Home 6',
      widgetConfigs: 0,
      themeConfigs: 121,
      brokerConfigs: 0,
    },
    {
      id: 8,
      name: 'Home 7',
      widgetConfigs: 0,
      themeConfigs: 484,
      brokerConfigs: 484,
    },
    {
      id: 9,
      name: 'Home 8',
      widgetConfigs: 0,
      themeConfigs: 196,
      brokerConfigs: 196,
    },
    {
      id: 10,
      name: 'Home 9',
      widgetConfigs: 0,
      themeConfigs: 441,
      brokerConfigs: 441,
    },
  ];
}
