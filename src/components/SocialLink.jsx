const SocialLink = ({ href, name, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon} alt={name}></i>
      </a>
    </li>
  );
};

export default SocialLink;
