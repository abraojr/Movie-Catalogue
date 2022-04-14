import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let materialModule: MaterialModule;

  beforeEach(() => {
    materialModule = new MaterialModule();
  });

  it('Should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
