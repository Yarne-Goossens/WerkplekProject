package team7.maakbaarleuven.repair.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import team7.maakbaarleuven.repair.model.Repair;

public interface RepairRepository extends JpaRepository<Repair, Long> {
    public List<Repair> findRepairsByProfileId(long id);

    public Repair findById(long id);

    public void deleteById(long id);
}
