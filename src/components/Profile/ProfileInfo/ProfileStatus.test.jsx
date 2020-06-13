import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    
  test("status from props should be in state", () => {
      const component = create(<ProfileStatus status="BASIC STATUS" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("BASIC STATUS");
    });

    test("after creation <span> should be displayed", () => {
      const component = create(<ProfileStatus status="BASIC STATUS" />);
      const root = component.root
      let span = root.findByType("span")
      expect(span).not.toBeNull();
    });

    test("after creation <input> should be null", () => {
      const component = create(<ProfileStatus status="BASIC STATUS" />);
      const root = component.root
      expect(() => {
        let input = root.findByType('input')
      }).toThrow();
    });

    test("after creation <span> should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="BASIC STATUS" />);
      const root = component.root
      let span = root.findByType("span")
      expect(span.children[0]).toBe('BASIC STATUS');
    });

    test("input should be displayed in edit mode", () => {
      const component = create(<ProfileStatus status="BASIC STATUS" />);
      const root = component.root
      let span = root.findByType("span")
      span.props.onDoubleClick()
      let input = root.findByType('input')
      expect(input.props.value).toBe('BASIC STATUS');
    });

    test("callback should be called", () => {
      const mockCallback = jest.fn()
      const component = create(<ProfileStatus status="BASIC STATUS" updateStatus={mockCallback} />);
      const instance = component.getInstance()
      instance.deactivateEditMode()
      expect(mockCallback.mock.calls.length).toBe(1);
    });

  });