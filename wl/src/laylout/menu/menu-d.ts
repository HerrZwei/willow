interface IMenuProps {
  title: string;
  path: string;
  icon: string;
  children?: Array<IMenuProps>;
}

export default IMenuProps;
