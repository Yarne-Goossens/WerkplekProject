package team7.maakbaarleuven.profile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team7.maakbaarleuven.device.model.Device;
import team7.maakbaarleuven.profile.model.Profile;
import team7.maakbaarleuven.profile.service.ProfileService;
import team7.maakbaarleuven.repair.model.Repair;

@RestController
@RequestMapping("/api/profile")
public class ProfileRestController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/overview")
    public List<Profile> getAllProfiles() {
        return profileService.getAllProfiles();
    }

    @GetMapping("/{email}")
    public Profile getProfileByEmail(@PathVariable("email") String email) {
        return profileService.getProfileByEmail(email);
    }

    @GetMapping("/repair/{repairId}")
    public Profile getProfileByRepairId(@PathVariable("repairId") long id) {
        return profileService.getProfileByRepairId(id);
    }

    @PostMapping("/add")
    public Profile addProfile(@RequestBody Profile profile) {
        return profileService.addProfile(profile);
    }

    @DeleteMapping("/delete/")
    public Profile deleteProfile(Profile profile) {
        return profileService.deleteProfile(profile);
    }

    @PostMapping("/authenticate")
    public Boolean authenticateProfile(@RequestBody Profile request) {
        System.out.println(request.getPassword());
        Profile profile = profileService.getProfileByEmail(request.getEmail());
        String password = request.getPassword();
        System.out.println(request.getEmail());

        if (profileService.authenticate(profile, password)) {
            System.out.println("gelukt");
            return true;
        } else {
            System.out.println("mislukt");
            return false;
        }
    }

    @PostMapping("/{profileId}/addRepair")
    public Profile addRepair(@PathVariable("profileId") long id, @RequestBody Repair repair) {
        // System.out.println("Repair:" + repair.getDeviceModelNumber());
        return profileService.addRepair(id, repair);
    }

    @PostMapping("/{profileId}/addDevice")
    public Profile adddevice(@PathVariable("profileId") long id, @RequestBody Device device) {
        // System.out.println("Device:" + device);
        return profileService.addDevice(id, device);
    }

    @PutMapping("/update")
    public void updateProfile(@RequestBody Profile profile) {
        profileService.updateProfile(profile);
    }

}
