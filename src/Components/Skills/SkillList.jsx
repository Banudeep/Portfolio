function SkillList({ src, skill }) {
  return (
    <>
      <img src={src} alt="check mark icon" />
      <p>{skill}</p>
    </>
  );
}

export default SkillList;
