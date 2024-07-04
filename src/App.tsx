import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  console.log(WebApp)
  const [count, setCount] = useState(0)

  useEffect(()=>{

//    navigator.permissions.query({name:'geolocation'}).then(function(result) {
//      if (result.state === 'granted') {
//        // Разрешение уже есть
//        console.log('granted')
//      } else if (result.state === 'prompt') {
//        // Нужно запросить разрешение
//        console.log('prompt')
//      } else if (result.state === 'denied') {
//        // Разрешение отклонено
//        console.log('denied')
//      }
//      result.onchange = function() {
//        console.log('Статус разрешения изменился на ' + result.state);
//      };
//    });


//    // После получения разрешения
//   //  localStorage.setItem('locationPermissionGranted', 'true');

//    // При загрузке страницы
//    if (localStorage.getItem('locationPermissionGranted') === 'true') {
//      // Запросить геолокацию без дополнительных объяснений
//      navigator.geolocation.getCurrentPosition(
//       success => {
//         console.log("Разрешение получено");
//       },
//       error => {
//         console.log("Разрешение не получено", error);
//       }
//     );
//    } else {
//      // Показать объяснение, почему нужна геолокация
//         console.log("нет в сторадже");
//    }

//    if (navigator.storage && navigator.storage.persist) {
//     navigator.storage.persist().then(granted => {
//       if (granted) {
//         console.log("Постоянное хранение разрешено");
//       } else {
//         console.log("Постоянное хранение не разрешено");
//       }
//     });
//   }

//      // Check for IndexedDB support:
//   if (!('indexedDB' in window)) {
//     // Can't use IndexedDB
//     console.log("This browser doesn't support IndexedDB");
//     return;
//   } else {
//     // Do IndexedDB stuff here:
//     // ...
//   }

//   if ("geolocation" in navigator) {
//     /* geolocation is available */
//   } else {
//     /* geolocation IS NOT available */
//   }


//   let openRequest = indexedDB.open("store", 1);

// openRequest.onupgradeneeded = function() {
//   let db = openRequest.result;
//   if (!db.objectStoreNames.contains('books')) { // если хранилище "books" не существует
//     db.createObjectStore('books', {keyPath: 'id'}); // создаём хранилище
//   }
// };

// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };

// openRequest.onsuccess = function() {
//   let db = openRequest.result;
//   // продолжить работу с базой данных, используя объект db
// };
   
 
  },[])

  return (
    <div style={{height:'300vh'}}>
      {/* {WebApp.initData} */}
      {/* {WebApp.initDataUnsafe()} */}
  <button onClick={()=>{
      navigator.geolocation.getCurrentPosition(
        success => {
          console.log("Разрешение получено");
        },
        error => {
          console.log("Разрешение не получено", error);
        }
      )
}}>get geo</button>
<a href='https://tg.local/3' target='_self'>ssdds</a>
    </div>
  )
}

export default App
