import { Helmet } from 'react-helmet';
import FieldImage from '../assets/compressFieldImage.jpg';

export const HelmetComponent = ({ game }) => {

  return (
    <Helmet>
      <title>{`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast | 4Cast4Football`}</title>
      <meta name="description" content={`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast`} />
      <meta property="og:title" content={`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast | 4Cast4Football`} />
      <meta property="og:description" content={`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast`} />
      <meta property="og:image" content={FieldImage} />
      <meta property="og:url" content="https://www.4cast4football.com" />
      <meta property="og:type" content="website" />
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@4Cast4Football" />
      <meta name="twitter:creator" content="@4Cast4Football" />
      <meta name="twitter:title" content={`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast`} />
      <meta name="twitter:description" content={`Week ${game.Week} - ${game.AwayTeam} @ ${game.HomeTeam} Forecast`} />
      <meta name="twitter:image" content={FieldImage} />
    </Helmet>
  );
}