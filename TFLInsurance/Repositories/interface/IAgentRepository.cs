using TFLInsurance.Models;
using TFLInsurance.DTOs.Request;

namespace TFLInsurance.Interfaces
{
    public interface IAgentsRepository
    {
        Task<List<Agents>> GetAllAgents();

        Task<Agents?> GetAgentById(long agent_id);

        Task<long> AddAgent(CreateAgentRequest agent);

        Task<bool> UpdateAgent(Agents agent);

        Task<bool> DeleteAgent(long agent_id);
    }
}