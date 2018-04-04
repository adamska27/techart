import React from "react";

import Wraper from "../../HOC/Wraper";
import NotFound from "../../components/NotFound";

class PagesNotFound extends React.PureComponent {
  render() {
    return <NotFound />;
  }
}

export default Wraper(PagesNotFound);
