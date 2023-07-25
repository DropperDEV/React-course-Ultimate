import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends)
  const [selectFriend, setSelectFriend] = useState(null)
  function handleAddFriend(friend){
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false)
  }
  function handleSelection(friend){
    setSelectFriend(cur => cur?.id === friend.id ? null : friend )
    setShowAddFriend(false)

  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelection} selectFriend={selectFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}  />}
        <Button OnToggle={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectFriend && <FormSplitBill selectFriend={selectFriend} />}
    </div>
  );
}

function FriendList({friends, onSelection, selectFriend}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectFriend={selectFriend}/>
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectFriend }) {
  const isSelect = selectFriend?.id === friend.id
  return (
    <li className={isSelect && "selected"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button OnToggle={()=> onSelection(friend)}>Select</Button>
    </li>
  );
}

function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const NewFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(NewFriend)

    setName("")
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">🧑‍🤝‍🧑Friend Name</label>
      <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
      <label htmlFor="">🌄Image URL</label>
      <input type="text" value={image} onChange={e=> setImage(e.target.value)}/>

    <Button>Submit</Button>
    </form>
  );
}

function FormSplitBill({selectFriend}) {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {selectFriend.name}</h2>

      <label htmlFor="">💰Bill value</label>
      <input type="text" />

      <label htmlFor="">🧍Your expense</label>
      <input type="text" />

      <label htmlFor="">🧑‍🤝‍🧑 {selectFriend.name}'s expense</label>
      <input type="text" />

      <label htmlFor="">🤑Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

function Button({ children, OnToggle }) {
  return (
    <button className="button" onClick={OnToggle}>
      {children}
    </button>
  );
}