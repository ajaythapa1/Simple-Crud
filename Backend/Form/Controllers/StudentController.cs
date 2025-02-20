using Form.Data;
using Form.Dtos;
using Form.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Form.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> GetStudent()
        {
            return Ok(await _context.Set<Student>().ToListAsync() ?? throw new Exception("Error while fetching"));
        }

        [HttpGet("/{id}")]
        public async Task<ActionResult> GetStudentById(Guid id) 
        {
            var student = await _context.Students.SingleOrDefaultAsync(x => x.Id == id);
            return Ok(student);
        }

       [HttpPost]
        public ActionResult CreateStudent(SaveStudentDto saveStudentDto)
        {
            var student = new Student
            {
                Id = Guid.NewGuid(),
                FirstName = saveStudentDto.FirstName,
                LastName = saveStudentDto.LastName,
                Address = saveStudentDto.Address,
                Age = saveStudentDto.Age
            };
            var newstd = _context.Set<Student>().Add(student);
            _context.SaveChanges();

            return Ok(newstd);
        }

        [HttpPatch]
        public async Task<ActionResult> EditStudent(UpdateStudentDto updateStudentDto)
        {
            var student = await _context.Students.FindAsync(updateStudentDto.Id);

            if (student == null)
            {
                return NotFound();
            }

            student.FirstName = updateStudentDto.FirstName;
            student.LastName = updateStudentDto.LastName;
            student.Address = updateStudentDto.Address;
            student.Age = updateStudentDto.Age;

            await _context.SaveChangesAsync();

            return Ok(student);
        }
     

        [HttpDelete("/id")]
        public async  Task<ActionResult> DeleteStudent(Guid Id) 
        {
            var student = await _context.Students.FindAsync(Id) ?? throw new Exception("Error while deleting");

            _context.Students.Remove(student);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
