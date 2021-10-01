import React, {useState} from 'react';

export default function Logout({ user, dispatchUser }) {
   return (
      <form onSubmit={e => {e.preventDefault(); dispatchUser({ type: 'LOGOUT' }) ; } }>
         Logged in as: <b>{user}</b>
         <input type="submit" value="Logout" />
      </form>
   )
}

// export default function Logout({ user, dispatchUser }) {
//    return (
//       <form onSubmit={e => {e.preventDefault(); setUser(''); } }>
//          Logged in as: <b>{user}</b>
//          <input type="submit" value="Logout" />
//       </form>
//    )
// }
