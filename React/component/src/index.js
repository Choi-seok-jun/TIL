import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Segment from "./components/Segment";
import Message from "./components/Message";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
  state = {
    comments: [],
    body: faker.lorem.paragraph()
  };

  handleAddcomments = () => {
    const newComment = {
      author: faker.name.firstName(),
      time: faker.date.recent().toLocaleString(),
      body: faker.lorem.sentence(),
      avatar: faker.image.avatar()
    };
    this.setState({ comments: [...this.state.comments, newComment] });
  };

  render() {
    return (
      <>
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon">no Document</i>
          </div>

          <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
          <h4 className="ui header">For your information</h4>
          <p>{faker.lorem.body}</p>
        </Segment>

        <Message
          header="회원 약관 변경"
          body="약관이 변경되었습니다 동의 하실거죠?"
        ></Message>
        <div className="ui container comments">
          <button
            className="ui primary button"
            onClick={this.handleAddcomments}
          >
            코멘트 추가하기
          </button>
          <ApprovalCard>
            <h4>저는 오늘 새벽까지 복습할꺼에요</h4>
            <p>열공!</p>
          </ApprovalCard>
          {this.state.comments.map(comment => (
            <ApprovalCard>
              <CommentDetail {...comment} />
            </ApprovalCard>
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
