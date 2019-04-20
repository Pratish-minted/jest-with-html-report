import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe("Successful rendering of App", ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Functions  in App", ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App />);
  });

  describe("Function: handleChange", ()=>{
    it("should set state property callingNumber", ()=>{
      wrapper.setState({
        callingNumber: null
      });
      wrapper.instance().handleChange({
        target: {
          value: "test"
        }
      });
      expect(wrapper.state().callingNumber).toEqual("test");
    });
  
    describe("if event object is not passed", ()=>{
      it("should throw Error", ()=>{
        expect(()=>{
          wrapper.instance().handleChange()
        }).toThrow(Error);
      })
    });
  });
  
  
  describe("Function: callCaptain", ()=>{
    // intentionally failing this test
    it("should set state property showRightDiv", ()=>{
      wrapper.instance().callCaptain();
      expect(1+1).toEqual(2);
    });
  });

});
