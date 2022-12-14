import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

      <ul className={css.statList}>
        {stats.map(info => (
          <li
            key={info.id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{info.label}</span>
            <span className={css.percentage}>{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
