// REACT COMPONENT IMPORTS
import { useEffect } from 'react';

// ASSETS
import blur from '@/assets/utilities/blur-23.svg'

// UTIL
import { glowCardProps } from '@/utils/prop-types';

// STYLE
import '@/styles/glow.css'
import { useTheme } from 'styled-components';

const GlowCard = ({ identifier, icon, date, title, company }) => {
  const theme = useTheme()

  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-secondary transition-all duration-300 relative bg-[#171717] text-white rounded-xl hover:border-transparent w-4/5`}>
        <div className="glows"></div>
        <div className="p-3 relative">
          <img
            loading="lazy"
            src={blur}
            alt="Blur"
            width={1080}
            height={200}
            className="absolute bottom-0 opacity-80"
          />
          <div className="flex justify-center">
            <p className={`text-xs sm:text-sm  font-space_mono ${theme.global.subHeading}`}>
              {date}
            </p>
          </div>
          <div className="flex items-center gap-x-8 px-3 py-5">
            <div className={`text-${theme.global.headingBox}  transition-all duration-300 hover:scale-125`}>
              {icon}
            </div>
            <div>
              <p className="text-base sm:text-xl mb-2 font-medium font-space_mono uppercase">
                {title}
              </p>
              <p className="text-sm sm:text-base font-extralight">
                {company}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

GlowCard.propTypes = glowCardProps;
export default GlowCard;
