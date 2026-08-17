import testmu, { resolveVar, setVar } from '@testmuai/playwright-bindings';
import { expect } from '@playwright/test';

testmu.configure({
  "build": "be15af12-ce0e-4c74-981b-28e2376c6f64",
  "name": "Search for Accommodation in Goa with Specific Dates and Guests",
  "tcId": "TC-114584",
  "network": (process.env.NETWORK ?? "false").toLowerCase() === "true",
  "autoHealVersion": "AH2",
  "defaultActionTimeoutMs": 10000,
  "defaultNavigationTimeoutMs": 60000,
  "kaneRunV4": true
});

testmu.test("Search for Accommodation in Goa with Specific Dates and Guests", async (page) => {
  let element_1, element_0, element_3;
  await testmu.step("Navigate to https://airbnb.co.in", { instructionId: "f0643b4e-61c4-4b85-9427-f7e7374cdd01" }, async () => {
    await page.goto("https://airbnb.co.in");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "85290868-d25e-4abe-9726-bf5d9b2595aa" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "274d79fa-a537-4714-ab77-1492fc087a74" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "92eb4ff0-0d29-468b-84f5-c0a99c1ce525" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Clicking Got it on the price notice modal", { instructionId: "4bbbcfba-5893-4291-821e-2c4c14a2f6f6" }, async () => {
    element_1 = page.locator("internal:role=button[name=\"Got it\"i]");
    await element_1.click();
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "ed258996-983a-439a-bef5-1fd018c3c101" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "b9a4a392-1114-482f-bc86-8685c243bbe3" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "dddac85b-4efc-4a07-80e7-adeb39c5417d" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "408b8667-6720-479e-9992-349d8f7a41f7" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Typing Goa in the destination search bar", { instructionId: "39a40760-061f-4be7-a711-98bd72ffd97f" }, async () => {
    element_0 = page.locator("internal:testid=[data-testid=\"structured-search-input-field-query\"s]");
    await element_0.click();
    await element_0.fill("Goa");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "0e679576-97d8-42b0-aa73-e1d549cba636" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "96e55ba0-a72d-4a1b-887f-773c2806015b" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "f7d7d2d9-3597-4470-b515-bb8d9a151584" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "4a4e6486-84f0-4300-9713-621c6eb2842b" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Tabbing to the first date button in the check-in calendar", { instructionId: "9d20e20c-5954-4049-9800-3c58463022d0" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Tabbing to the date grid in the open check-in calendar", { instructionId: "69ced0dc-0bb0-4493-afd0-5d9dbca737b2" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab to move focus into the open check-in calendar controls", { instructionId: "190d8cd9-bd82-4b4f-aec0-3fc90e14062e" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab to move focus into the calendar date grid", { instructionId: "13eebed3-00b1-4513-b1c9-dec248d96070" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Tabbing to move focus into the check-in calendar date cells", { instructionId: "1b3b4ba0-f85a-48a4-a7df-1d95d5281f7c" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Right Arrow key to move to the next available date", { instructionId: "0b8862b7-f9bd-4766-a318-c556a8c33328" }, async () => {
    await page.keyboard.press("ArrowRight");
  });
  
  await testmu.step("Pressing Enter to activate the focused date button for Tuesday, August 18, 2026", { instructionId: "9e2094eb-dd3d-4314-b334-15f02e911552" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Pressing the ArrowRight key to move focus to the next available check-out date", { instructionId: "f3cf995a-4307-4a3c-8628-470b6d4949bb" }, async () => {
    await page.keyboard.press("ArrowRight");
  });
  
  await testmu.step("Pressing Enter key to select the focused check-out date", { instructionId: "e2dd55d4-e79d-4a3d-8346-cf70942df1fd" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "03ccc9d8-d296-48ea-9ebd-62b1e4bb9fc3" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "78732743-f001-473b-88db-d428b18b991f" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "1945088d-737a-4c42-be6c-d40090aa78d6" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "f1cc5e54-d9d8-4ba6-b10a-0436b1d34888" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "77d8c016-ebac-454d-a598-fd9ef74d0469" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key to move focus to the next element", { instructionId: "300ff99a-83e3-4361-9415-eeca9a8f7dd1" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "142258a7-b11f-4fdc-8a3a-0b93e1ff791d" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "141b327e-aeeb-48d5-989a-56e75af48872" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "aaecc482-b6ab-49cb-a858-b36c0794ea3e" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "293aee0c-d340-47c8-9acd-c455a9429699" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "a64b91e9-0753-4425-8592-7a9a915cb621" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "11badab6-1f93-4a1a-9a98-b7305a08e90b" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Escape key", { instructionId: "0676c71b-25a7-41cf-bf13-bfdbc39cc56c" }, async () => {
    await page.keyboard.press("Escape");
  });
  
  await testmu.step("Clicking date range button 18 Aug to 19 Aug", { instructionId: "6cc805a5-e607-4500-8192-b8681f3b8b9f" }, async () => {
    element_3 = page.locator("internal:role=button[name=\"When 18 Aug - 19 Aug\"i]");
    await element_3.click();
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "74b497ee-fdf1-4813-a579-9521ae88d8f0" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "6c2700aa-e6a1-4037-8e35-ea3427396fef" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "08f2c754-db8f-4993-8b1d-7e18a8521f84" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "04d7f2ab-aa05-4425-b433-69bc6e08782e" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Tab key", { instructionId: "101e7542-b5af-497b-bf63-5303130ea6ee" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "1bad2ec5-8761-4dc9-aba2-03cf1d660568" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "41aef5ce-32a2-4c2a-aa25-0b18fe0b205e" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "ba815b83-1b07-42bf-9553-2c3a4349cc2c" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "d4e1cdfb-f959-4872-a7c7-77a7134cecb0" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "eb138aa3-2c08-427b-8b6f-f309a64c568e" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing the Tab key", { instructionId: "d8fcb80c-290b-4d21-9ea9-a2ac8d6e1f07" }, async () => {
    await page.keyboard.press("Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "4130d11f-62b7-4fa7-b2d6-689312a624de" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "85ef719c-f4c0-4b1f-9b1a-a2d657f1c366" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "d04bc721-36e8-46a4-b1a8-d0c5f2a346ce" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "cc408fd2-cfaa-4ea4-bb42-ce47b152e007" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "561405ed-2f57-452f-a607-53402d98d8cb" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "b0da8eb9-f7a8-44dc-a949-0b66b75aabc6" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing Shift+Tab", { instructionId: "4547978a-e60d-4a48-bd0b-66f426e25ddb" }, async () => {
    await page.keyboard.press("Shift+Tab");
  });
  
  await testmu.step("Pressing the Enter key", { instructionId: "730ea7af-3384-4f94-8815-ed6c882ef578" }, async () => {
    await page.keyboard.press("Enter");
  });
  
  await testmu.step("Checking whether the search parameters are preserved on the results page", { instructionId: "bce2a94d-9443-456c-aa85-cf62ca73ab1f" }, async () => {
    setVar("search_parameters_preserved_check", "true");
  });
  
  await testmu.step("Assertion check", { instructionId: "3a75442d-743e-4e02-8d1c-8fcf94a4580c" }, async () => {
    await testmu.verifyAssertion(page, "Assertion check", {"operator": ["equals"], "assertion_operands": [], "left_operand": null, "right_operand": null, "operands": [], "sub_results": [{"description": "the search parameters are preserved on the results page", "passed": true, "operator": "equals", "transforms": [], "json_path": null, "expected": "true", "extracted_value": "true", "store_key": "search_parameters_preserved_check", "variable_refs": null}], "sub_checks": [{"description": "the search parameters are preserved on the results page", "store_key": "search_parameters_preserved_check", "expected_value": "true", "extracted_value": "true", "operator": "equals", "transforms": []}], "composite_operator": "and", "claim": "the search parameters are preserved on the results page"});
  });
});

testmu.run();