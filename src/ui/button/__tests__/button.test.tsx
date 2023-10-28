/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { Button } from '../button';

describe('button', () => {
  test('onClick', async () => {
    const onClick = jest.fn();
    const view = render(
      <Button variant="primary" onClick={onClick}>
        OK
      </Button>
    );
    const button = await view.findByRole('button');
    button.click();
    expect(onClick).toHaveBeenCalledWith('ok');
    console.log(onClick.mock.calls[0]);
  });
  describe('disabled', () => {
    test('disabled passed', async () => {
      const onClick = jest.fn();
      const view = render(
        <Button variant="primary" onClick={onClick} disabled={true}>
          OK
        </Button>
      );
      const button = await view.findByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
    test('disabled not passed', async () => {
      const onClick = jest.fn();
      const view = render(
        <Button variant="primary" onClick={onClick} disabled={false}>
          OK
        </Button>
      );
      const button = await view.findByRole('button');
      expect(button).not.toHaveAttribute('disabled');
    });
  });
  test('onFocus', async () => {
    const onClick = jest.fn();
    const onFocus = jest.fn();
    const view = render(
      <Button variant="primary" onClick={onClick} onFocus={onFocus}>
        OK
      </Button>
    );
    const button = await view.findByRole('button');
    button.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
  describe('children', () => {
    test('string children', () => {
      const onClick = jest.fn();
      const view = render(
        <Button variant="primary" onClick={onClick}>
          OK
        </Button>
      );
      expect(view.container.textContent).toContain('OK');
    });
    test('jsx children', async () => {
      const content = (
        <div>
          <img src="" alt="img"></img>
          <span>imgText</span>
        </div>
      );
      const onClick = jest.fn();
      const view = render(
        <Button variant="primary" onClick={onClick}>
          {content}
        </Button>
      );
      const image = await view.findByRole('img');
      expect(view.container.textContent).toContain('imgText');
      expect(image).toBeTruthy();
    });
  });
});
