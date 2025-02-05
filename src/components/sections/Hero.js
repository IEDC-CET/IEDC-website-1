import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

import "./Hero.css";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  



 

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom text-[1.1em] sm:text-4xl" data-reveal-delay="200">
              <span className="text-color-primary para xs:text-md sm:text-md sk:text-md">INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom para" data-reveal-delay="400">
                COLLEGE OF ENGINEERING, TRIVANDRUM
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/* <ButtonGroup>
                  <Button tag="a" color='primary' style={{ outline: '1px solid #5658dd', backgroundColor: 'transparent' }} wideMobile href="#">
                    Join US
                  </Button>
                   <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> 
                </ButtonGroup> */}
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            
              <Image
                className="has-shadow"
                src={require('./../../assets/images/design1.png')}
                alt="Hero"
                width={896}
                height={504} />
  
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;