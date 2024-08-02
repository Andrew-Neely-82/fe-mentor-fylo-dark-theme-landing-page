const ListItems = ({ data }) =>
  data.links.map((el, key) => (
    <li key={key}>
      <a href="#">{el}</a>
    </li>
  ));
export default ListItems;
