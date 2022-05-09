import s from './Spaces.module.scss'

let Spaces = () => {
  return(
    <div>
      <div className={s.About}>
      <p>ABOUT</p>
      <img width='460' height='430' src='/Img/Footer_flower.png'/>
        <div className={s.title}>
          <b>
            Planteplaneter are small decorative “planets”, designed as an alternative to the ordinary houseplant.
          </b>
          <p>
            By presenting the plants as little flying planets, they become magic hanging sculptures. We make the planteplaneter by hand in Denmark, 
            and they are based on traditional Japanese techniques with a modern, Scandinavian twist.  They can be hung from shelves, hooks from the 
            ceiling and are perfect for unused spaces. Planteplaneter gives a poetic and decorative feeling to your home and are a different way to grow 
            and display plants.
          </p>
        </div>
      </div>
      <div>
        <div className={s.FrontImage}>
          <img src='/Img/Spaces/Spaces.png'/>
        </div>
        <div>
          <div>
            <b>FREE SHIPPING IN DK</b>
            <p>
              We are shipping all around Europe within 1-10 working days. Shipping in all of  Denmark with GLS is free and we have a flat rate of 120kr for the rest of Europe with UPS.
            </p>
          </div>
          <div>
            <b>GREEN CARE</b>
            <p>
              We handle all our handmade Planteplaneter carefully. If you have any questions or concerns we are here to help. Please send an email to info@kajaskytte.dk and we will get back to you as quickly as possible.

            </p>
          </div>
        </div>
      </div>
      <div>
        <img src='/Img/Spaces/kaja.png'/>
        <b>KAJA SKYTTE</b>
        <div>
          The Danish architect Kaja Skytte works in the field of interior design with a special focus on materials and the interaction with space.
          She works in a variety of materials and has developed such diverse products as planteplaneter, wall structures, stone sculptures, mobiles and furniture.
          In 2015, Kaja founded her own company, where she among other things, produces and sells the plant planets – a freely suspended decorative houseplant, inspired by an old Japanese method.
          Kaja has recently been nominated to Danish Design Award in September 2016. In 2013, she was nominated to RIBA Presidents Silvermedal.
          Kaja Skytte lives and works in Copenhagen, Denmark, where she has her own studio in Vesterbro.
        </div>
      </div>
      <div>
        <div>
          <img src='/Img/Spaces/cecilie.png'/>
          <b>CECILIE</b>
          <b>
            PLANTEPLANET MAKER AND 
            WEBDIRECTOR
          </b>
        </div>
        <div>
          <img src='/Img/Spaces/natalie.png'/>
          <b>NATALIE</b>
          <b>PLANTEPLANET MAKER</b>
        </div>
      </div>
    </div>
  )
}
export default Spaces