import Button from "../button/button.component";
import IconButton from "../icon-button/icon-button.component";

const ButtonsGrid = ({ handleClick }) => {
  return (
    <div className="buttonsGrid-wrapper">
      <div className="buttonsGrid-body">
        <div className="buttonsGrid-row">
          <div className="buttonsGrid-column">
            <Button
              text="AC"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <Button
              text="7"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="4"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="1"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="."
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
          </div>
          <div className="buttonsGrid-column">
            <Button
              text="±"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <Button
              text="8"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="5"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="2"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="0"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
          </div>
          <div className="buttonsGrid-column">
            <IconButton
              type="percentage"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <Button
              text="9"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="6"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <Button
              text="3"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
            />
            <IconButton
              type="backspace"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
          </div>
          <div className="buttonsGrid-column">
            <IconButton
              type="divide"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <IconButton
              type="times"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <IconButton
              type="minus"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <IconButton
              type="plus"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
            <IconButton
              type="equals"
              classes="buttonsGrid-item"
              clickHandler={handleClick}
              isOperation
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGrid;
