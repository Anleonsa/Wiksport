import Swal from 'sweetalert2'
import css from './ExerciseCard.module.css'

const ExerciseCard = ({ img_url, name, difficulty, category, muscle, description }) => {

  const display_description = () => {
    Swal.fire({
      title: name,
      text: description,
      imageUrl: img_url,
      imageHeight: 300,
      html: `
        <div style='text-align: left'>
          <p>${description}</p>
        
          <div>Dificultad: ${difficulty}</div>
          <div>Categoría: ${category}</div>
          <div>Músculos: ${muscle}</div>
        </div>
      `,

    })
  }

  return (
    <div className={css.card_container}>
      <div className={css.img_container}>
        <img className={css.img} src={img_url} alt="exercise image" />
      </div>
      <div className={css.card_content}>
        <h2 className={css.card_title}>{name}</h2>
        <div className={css.info_container}>
          <span>Dificultad: {difficulty}</span>
          <span>Categoría: {category}</span>
          <span>Músculos: {muscle}</span>
        </div>
        <span className={css.card_see_more} onClick={display_description}>Ver más</span>
      </div>
    </div>
  )
}
export default ExerciseCard
