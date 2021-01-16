import { TestBed } from "@angular/core/testing";

import { RecipesService } from "./recipes.service";

describe("ReceipesService", () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
