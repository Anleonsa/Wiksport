import Swal from 'sweetalert2'
import css from './ExerciseListItem.module.css'

const ExerciseListItem = ({ position, img, name, amount, series, category, difficulty, muscles, execution_type, description}) => {
  
  const display_description = () => {
    Swal.fire({
      title: name,
      text: description,
      imageUrl: img,
      background: '#000',
      color: '#eee',
      imageHeight: 300,
      html: `
        <div style='text-align: left'>
          <p>${description}</p>
        
          <div>Dificultad: ${difficulty}</div>
          <div>Categoría: ${category}</div>
          <div>Músculos: ${muscles}</div>
        </div>
      `,

    })
  }

  return (
    <div className={css.card}>
      <span className={css.position}>{position}</span>
      <div className={css.img_container}>
        <img className={css.img} src={img} alt="" />
      </div>
      <div className={css.info_container}>
        <h3 className={css.name}>{name}</h3>
        <div className={css.info_items_container}>
          <div className={css.info_item}>
            <span>Repeticiones / tiempo</span>
            <span>{amount + ' ' + (execution_type === 'R' ? 'Repeticiones' : 'Segundos')}</span>
          </div>
          <div className={css.info_item}>
            <span>Series</span>
            <span>{series}</span>
          </div>
          <div className={css.info_item}>
            <span>Categoría</span>
            <span>{category}</span>
          </div>
          <div className={css.info_item}>
            <span>Dificultad</span>
            <span>{difficulty} / 10</span>
          </div>
          <div className={css.info_item}>
            <span>Músculos implicados</span>
            <span>{muscles}</span>
          </div>
        </div>
      </div>
      <div className={css.see_more_container}>
        <span className={css.see_more_btn} onClick={display_description}>Ver más</span>
      </div>
    </div>
  )
}
export default ExerciseListItem
