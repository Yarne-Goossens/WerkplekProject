package team7.maakbaarleuven.device.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "devices")
public class Device {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    public long id;
    public String deviceModelNumber;
    public int purchasePrice;
    public int bereidTeBetalen;
    public int ageInMonths;
    public String diagnose;
    public long userId;

    public Device() {
    }

    public Device(String deviceModelNumber, int purchasePrice, int bereidTeBetalen, int ageInMonths, String diagnose,
            long userId) {
        this.deviceModelNumber = deviceModelNumber;
        this.purchasePrice = purchasePrice;
        this.bereidTeBetalen = bereidTeBetalen;
        this.ageInMonths = ageInMonths;
        this.diagnose = diagnose;
        this.userId = userId;
    }

    public void setDeviceModelNumber(String deviceModelNumber) {
        this.deviceModelNumber = deviceModelNumber;
    }

    public String getDeviceModelNumber() {
        return this.deviceModelNumber;
    }

    public void setPurchasePrice(int purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public int getPurchasePrice() {
        return this.purchasePrice;
    }

    public void setBereidTeBetalen(int bereidTeBetalen) {
        this.bereidTeBetalen = bereidTeBetalen;
    }

    public int getBereidTeBetalen() {
        return this.bereidTeBetalen;
    }

    public int getAgeInMonths() {
        return this.ageInMonths;
    }

    public void setAgeInMonths(int age) {
        this.ageInMonths = age;
    }

    public String getDiagnose() {
        return this.diagnose;
    }

    public void setDiagnose(String diagnose) {
        this.diagnose = diagnose;
    }

    public long getUserId() {
        return this.userId;
    }

    public void setUserId(long id) {
        this.userId = id;
    }
}