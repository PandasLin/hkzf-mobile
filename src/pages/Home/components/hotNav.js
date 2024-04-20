export function HotNav () {
  const navList = [
    {
      name: '整租',
      id: '',
      src: ''
    },
    {
      name: '合租',
      id: '',
      src: ''
    },
    {
      name: '地图找房',
      id: '',
      src: ''
    },
    {
      name: '去出租',
      id: '',
      src: ''
    }
  ]
  function renderNavs() {
    return navList.map(item => {
      return (
        <li key={item.name} onClick={() => handleClick(item)}>
          <img src={item.src} alt="hh"></img>
          <h2>{item.name}</h2>
        </li>
      )
    });
  };
  function handleClick(item) {
    console.log(item);
  }
  return (
    <ul className="flex_space_between mt_15">
      {renderNavs()}
    </ul>
  );
}