import React from 'react';

class Tabs extends React.Component {

  constructor(){
    super();
    this.state = {idx: 1};
    this.setIdx = this.setIdx.bind(this);
  }

  setIdx(e) {
    const idx = e.currentTarget.value;
    this.setState({ idx });
  }

  setContent() {
    const content = {
      1: 'This is the first box',
      2: 'This is the second box',
      3: 'This is the third box'
    };

    return content[this.state.idx];
  }

  render() {
    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <section>
        <ul>
          <li onClick={this.setIdx} value={1}><header>One</header></li>
          <li onClick={this.setIdx} value={2}><header>Two</header></li>
          <li onClick={this.setIdx} value={3}><header>Three</header></li>
        </ul>
        <article>{this.setContent()}</article>
        </section>
      </div>
    );
  }

}

export default Tabs;
