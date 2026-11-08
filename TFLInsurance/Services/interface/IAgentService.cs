using TFLInsurance.DTOs.Request;
using TFLInsurance.DTOs.Response;

namespace TFLInsurance.Interfaces
{
    public interface IAgentsService
    {
        Task<List<AgentResponse>> GetAllAgents();

        Task<AgentResponse?> GetAgentById(long agent_id);

        Task<long> AddAgent(CreateAgentRequest request);

        Task<bool> UpdateAgent(long agent_id, UpdateAgentRequest request);

        Task<bool> DeleteAgent(long agent_id);
    }
}