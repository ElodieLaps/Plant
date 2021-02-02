import default_plant from '../../assets/img/default_plant.jpg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plant = ({name, picture, slug, gridNumber, action, plant}) => {
   return (  
   <PrettyStyle 
      className={`plant_${slug} grid-${gridNumber}`} 
      url={picture} 
      default_url={default_plant} 
      onClick={action}
   >
      <div className="hover">
         <h2 className="title">{name}</h2>
      </div>
    </PrettyStyle>
   );
}

const PrettyStyle = styled.div`
   background-image: url(${props => props.url ? props.url : props.default_url});
   background-size: cover;
   border-radius: 2px;
   cursor: pointer;
   box-shadow: inset 5px 5px 5px 0px rgba(0,0,0,0.21);
   div.hover {
      visibility: hidden;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color .3s ease-in-out;
      h2 {
         color: #ffffff;
         text-align: center;
      }
   }
   &:hover {
      div.hover {
         visibility: visible;
         background-color: rgb(54,44,92);
         background: linear-gradient(61deg, rgba(54,44,92,0.7567401960784313) 0%, rgba(104,60,153,0.4906337535014006) 35%, rgba(202,222,203,0) 100%);
         
      }
   }
`

Plant.defaultProps = {
   name: 'default plant',
   picture: default_plant,
   slug:'default-plant',
   action: () => alert('default action')
}

Plant.propTypes = {
   name: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
   slug: PropTypes.string.isRequired,
   gridNumber: PropTypes.number,
   action: PropTypes.func.isRequired
}




 
export default Plant;