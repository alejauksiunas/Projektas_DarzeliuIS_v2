package managerPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AbstractObjectPage;

import java.time.Duration;

public class CreateAndDeleteNewKindergartenPage extends AbstractObjectPage {

    //input fields
    @FindBy(id = "id")
    public WebElement kindergartenID;

    @FindBy(id = "name")
    public WebElement kindergartenName;

    @FindBy(id = "address")
    public WebElement kindergartenAddress;

    @FindBy(id = "capacityAgeGroup2to3")
    public WebElement capacityAgeGroup2to3;

    @FindBy(id = "capacityAgeGroup3to6")
    public WebElement capacityAgeGroup3to6;

    @FindBy (id = "directorName")
    public WebElement directorName;

    @FindBy (id = "directorSurname")
    public WebElement directorSurname;

    // update kindergarten input fields
    @FindBy(id = "txtKindergartenName")
    public WebElement newKindergartenName;

    @FindBy(id = "nmbCapacity3to6")
    public WebElement numberCapacity3to6;

    // search input field
    @FindBy(xpath = "//*/div/div[2]/input")
    public WebElement searchInput;

    //buttons
    @FindBy(id = "btnSaveKindergarten")
    public WebElement buttonSaveKindergarten;

    @FindBy(id = "btnUpdateKindergarten")
    public WebElement buttonUpdateKindergarten;

    @FindBy(id = "btnSaveUpdatedKindergarten")
    public WebElement saveUpdatedKindergarten;

    @FindBy(id = "btnDeleteKindergarten")
    public WebElement buttonDeleteKindergarten;

    @FindBy(xpath = "//*/div[2]/button")
    public WebElement buttonAgreeToDeleteKindergarten;

    public void inputKindergartenID(String value) {
        kindergartenID.sendKeys(value);
    }

    public void inputKindergartenName(String value) {
        kindergartenName.sendKeys(value);
    }

    public void inputKindergartenAddress(String value) {
        kindergartenAddress.sendKeys(value);
    }

    public void inputCapacityAgeGroup2to3(String value) {
        capacityAgeGroup2to3.sendKeys(value);
    }

    public void inputCapacityAgeGroup3to6(String value) {
        capacityAgeGroup3to6.sendKeys(value);
    }

    public void inputDirectorName(String value) {
        directorName.sendKeys(value);
    }

    public void inputDirectorSurname(String value) {
        directorSurname.sendKeys(value);
    }

    public void clickButtonSaveKindergarten() {
        buttonSaveKindergarten.click();
    }

    public void clickOKPopUp() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        WebElement popUpClickOK = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.xpath("/html/body/div[2]/div/div[2]/div/button")));
        popUpClickOK.click();
    }

    public void searchForTheNewlyCreatedKindergarten(String value) {
        searchInput.sendKeys(value);
    }

    public void newKindergartenSearchResult() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        wait.until(ExpectedConditions.textToBe(By.xpath("//*//td[1]"), "AaTestinis"));
    }

    public void clickButtonUpdateKindergarten() {
        buttonUpdateKindergarten.click();
    }

    public void updateNewKindergartenName(String value) {
        newKindergartenName.clear();
        newKindergartenName.sendKeys(value);
    }

    public void updateKindergartenNumberCapacity3to6(String value) {
        numberCapacity3to6.clear();
        numberCapacity3to6.sendKeys(value);
    }

    public void clickSaveUpdatedKindergarten() {
        saveUpdatedKindergarten.click();
    }

    public void clickButtonDeleteKindergarten() {
        buttonDeleteKindergarten.click();
    }

    public void clickButtonAgreeToDeleteKindergarten() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        wait.until(ExpectedConditions.elementToBeClickable(buttonAgreeToDeleteKindergarten));
        buttonAgreeToDeleteKindergarten.click();
    }

    public void assertKindergartenWasDeletedSuccessfully() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        wait.until(ExpectedConditions.textToBe(By.xpath("//body/div[2]/div/div[1]"), "Darželis ištrintas sėkmingai"));
    }

    // constructor
    public CreateAndDeleteNewKindergartenPage(WebDriver driver) {
        super(driver);
    }

}